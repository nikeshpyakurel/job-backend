const getAllJobs = async (req, res) => {
    res.send('Get all Jovs');
}

const getJob = async (req, res) => {
    res.send('Get Job');
}

const createJob = async (req, res) => {
    res.json(req.body)
}
const updateJob = async (req, res) => {
    res.send('Update Job');
}
const deleteJob = async (req, res) => {
    res.send('Delete Job');
}

module.exports = {
    getAllJobs, getJob, createJob, updateJob, deleteJob
}