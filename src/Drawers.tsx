import './Drawers.scss';
export interface DrawersProps {}

export const Drawers = (props: DrawersProps) => {
  console.log(props);
  return <div className="react-drawers_drawers">Drawers</div>;
};
