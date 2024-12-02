import mongoose from 'mongoose';
import config from 'config';
import logger from './loggers';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    logger.info('DB connected');
  } catch (error) {
    logger.info('Could not connect to db:', error);
    process.exit(1);
  }
}

export default connect;
