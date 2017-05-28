function getProjects() {
    let data = [];

    for(let i = 1; i <= 5; i ++) {
        data.push({
            name: "Project " + i.toString()
        });
    }

    return data;
}

export default getProjects;