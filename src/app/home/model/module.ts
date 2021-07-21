export class ModuleModel {
    constructor(
        public projectId: Number,
        public moduletId: Number,
        public moduleName: String,
        public moduleDesc: String,
        public nodeId: String,
        public parentNodeId: String
    ){}
}