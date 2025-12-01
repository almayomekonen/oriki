import CourseGoal from "./CourseGoal";

type GoalsListProps = {
  goals: {
    description: string;
    title: string;
    id: number;
  }[];
};

export default function GoalsList({ goals }: GoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
