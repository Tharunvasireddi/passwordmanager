import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

// Use a strong encryption key from environment variables
// If not set, generate a warning and use a temporary key (not recommended for production)
let ENCRYPTION_KEY;
if (process.env.ENCRYPTION_KEY) {
  ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'base64');
} else {
  console.warn('⚠️  ENCRYPTION_KEY not set in environment variables. Using temporary key.');
  ENCRYPTION_KEY = crypto.randomBytes(32);
}

const ALGORITHM = 'aes-256-gcm';

/**
 * Encrypts a password using AES-256-GCM
 * @param {string} text - The password to encrypt
 * @returns {string} - Encrypted password with IV and auth tag
 */
export const encryptPassword = (text) => {
  try {
    // Generate a random initialization vector
    const iv = crypto.randomBytes(16);
    
    // Create cipher
    const cipher = crypto.createCipherGCM(ALGORITHM, ENCRYPTION_KEY, iv);
    
    // Encrypt the text
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    // Get the authentication tag
    const authTag = cipher.getAuthTag();
    
    // Combine IV, auth tag, and encrypted data
    const result = iv.toString('hex') + ':' + authTag.toString('hex') + ':' + encrypted;
    
    return result;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt password');
  }
};

/**
 * Decrypts a password using AES-256-GCM
 * @param {string} encryptedText - The encrypted password string
 * @returns {string} - Decrypted password
 */
export const decryptPassword = (encryptedText) => {
  try {
    // Split the encrypted text to get IV, auth tag, and encrypted data
    const parts = encryptedText.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted password format');
    }
    
    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];
    
    // Create decipher
    const decipher = crypto.createDecipherGCM(ALGORITHM, ENCRYPTION_KEY, iv);
    decipher.setAuthTag(authTag);
    
    // Decrypt the text
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt password');
  }
};

/**
 * Generates a secure encryption key for environment setup
 * @returns {string} - Base64 encoded encryption key
 */
export const generateEncryptionKey = () => {
  return crypto.randomBytes(32).toString('base64');
};
