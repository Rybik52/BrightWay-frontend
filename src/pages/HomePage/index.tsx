import styles from "./HomePage.module.scss";
import Card from "components/Card";
import TaskTable from "components/TaskTable";
import FlashDriveIcon from "assets/CardsIcons/FlashDriveIcon";
import BankIcon from "assets/CardsIcons/BankIcon";
import ListIcon from "assets/CardsIcons/ListIcon";
import FileIcon from "assets/CardsIcons/FileIcon";
import CalendarIcon from "assets/CardsIcons/CalendarIcon";
import Button from "components/common/Button";

const Index = () => {
  const hasTasks = true;

  return (
    <>
      <div className={styles.cards_container}>
        <Card title="Электронная подпись" icon={<FlashDriveIcon />}>
          <Button variant="outlined">Перейти</Button>
        </Card>
        <Card title="Мои организации" icon={<BankIcon />}>
          <Button variant="outlined">Перейти</Button>
        </Card>
        <Card title="Мои отчеты" icon={<ListIcon />}>
          <Button variant="outlined">Перейти</Button>
        </Card>
      </div>
      <div className={styles.tasks}>
        <h2>Мои задания</h2>
        {hasTasks ? (
          <TaskTable />
        ) : (
          <div className={styles.cards_container}>
            <Card title="Одинарное задание" icon={<FileIcon />}>
              <Button variant="outlined">Создать +</Button>
            </Card>
            <Card title="Задание по расписанию" icon={<CalendarIcon />}>
              <Button variant="outlined">Создать +</Button>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
