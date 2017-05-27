
function requestJobs() {
    const jobsUrl = '/jobs/';
    $.ajax({
        url: jobsUrl,
        dataType: 'json',
        type: 'get',
        success: function (data) {
            console.log(data);
            return data;
        },
        error: function (err) {
            console.log(err);
            console.log("Couldn't load jobs from server")
        }
    });
}


export default requestJobs;