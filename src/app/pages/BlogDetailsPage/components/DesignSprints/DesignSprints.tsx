import './DesignSprints.scss';
interface DesignSprintsProps {
  order: number;
  title: string;
}
export const DesignSprints = (props: DesignSprintsProps) => {
  const { order, title } = props;
  const className = 'paragraph';
  return (
    <div className={className}>
      <div className="order">{order}</div>
      <p>{title}</p>
    </div>
  );
};
