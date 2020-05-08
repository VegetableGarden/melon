const util = require("util");
const exec = util.promisify(require("child_process").exec);
const core = require("@actions/core");

async function main() {
    const expectedRepo = core.getInput("expected-repo");
    const command = core.getInput("command");

    const {stdout} = await exec("git remote -v");
    core.info(`current remote is ${stdout}`)
    const isValidRepo = stdout.includes(expectedRepo)
    if (isValidRepo) {
        core.info(`execute command: ${command}`)
        await exec(command)
    } else {
        core.info('not expected repo, skip this execute.')
    }
}

main().catch(error => core.setFailed(error.message));
