require("dotenv").config();

const { execSync } = require("child_process");

const STEPZEN_USERNAME = process.env.STEPZEN_USERNAME;
const STEPZEN_ADMIN_KEY = process.env.STEPZEN_ADMIN_KEY;

execSync(`stepzen login -a ${STEPZEN_USERNAME} -k ${STEPZEN_ADMIN_KEY}`);
