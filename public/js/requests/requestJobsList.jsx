import axios from '../../node_modules/axios';

function requestJobs() {
    axios.get('/jobs')
        .then((res) => {
            return res;
        })
}


export default requestJobs;