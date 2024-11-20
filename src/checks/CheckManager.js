import fs from 'fs';
import path from 'path';

class CheckManager {
    constructor() {
        this.checkDirectory = fs.readdirSync(path.join(import.meta.dirname, '..', 'checks'));
        this.checkFiles = this.checkDirectory.filter(file => file !== 'CheckManager.js');
        this.checkModules = this.loadCheckModules();
        this.checks = {};
    }

    async loadCheckModules() {
        const modules = await Promise.all(this.checkFiles.map(async (file) => await import(`../checks/${file}`)));
        this.checks = this.checkFiles.reduce((acc, file, index) => {
            acc[file.slice(0, -3)] = modules[index].default;
            return acc;
        }, {});
    }

    async waitForChecks() {
        await this.checkModules;
    }
}

const checkManager = new CheckManager();
export default checkManager;