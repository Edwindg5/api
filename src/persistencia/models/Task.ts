export interface Task {
  id?: number;
  userId: number;
  title: string;
  description: string;
  completed: boolean;
  created_at?: Date;
}
