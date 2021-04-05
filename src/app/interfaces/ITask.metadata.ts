export interface ITask{
    id?:number;
    title:string;
    type:string;
    dueDate:Date;
    description:string,
}
export interface ITaskTypeOption {
    type: string;
  }
export interface ITypePercentage {
    count: number;
    type: string;
  }