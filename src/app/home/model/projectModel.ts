export class ProjectModel{

    constructor(
    public projectId: Number,
    public projectName: String,
    public projectDesc: String,
    public nodeId: String,
    public parentNodeId: String
    ){}
}