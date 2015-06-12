module.exports = {

    view: {
        files: [{
            cwd: 'project/app/view/',
            src: [
                '**', /* Include everything */
                '!template/**' /* but exclude template files */
            ],
            dest: 'www/view'
        }]
    },

    public: {
        files: [{
            cwd: 'project/public/',
            src: [
                '**'
            ],
            dest: 'www/public/'
        }]
    },

    db: {
        files: [{
            cwd: 'project/db/',
            src: [
                '**'
            ],
            dest: 'www/db/'
        }]
    },


    pretend: false, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
    verbose: true, // Display log messages when copying files
    updateAndDelete: true
};