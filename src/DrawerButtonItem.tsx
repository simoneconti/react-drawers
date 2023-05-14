export interface DrawerButtonItemProps {
  children: React.ReactNode;
  onClick(): void;
}

export const DrawerButtonItem = ({ children, onClick }: DrawerButtonItemProps) => {
  return (
    <div className="d-grid">
      <button onClick={onClick}> {children}</button>
    </div>
  );
};
