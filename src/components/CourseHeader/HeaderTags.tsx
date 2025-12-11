import { FaStar, FaUsers, FaClock, FaChartBar } from "react-icons/fa";
import { styles } from "./styles";

interface HeaderTagsProps {
  rating: number;
  studentCount: number;
  duration: string;
  difficulty: string;
}

export function HeaderTags({ rating, studentCount, duration, difficulty }: HeaderTagsProps) {
  return (
    <div className={styles.tagsWrapper}>
      {/* Avaliação */}
      <div className="flex items-center gap-1.5">
        <FaStar className={styles.starIcon} />
        <span className="font-bold text-base">{rating}</span> 
        <span className="text-blue-100 font-normal">({studentCount} avaliações)</span>
      </div>
      
      {/* Alunos */}
      <div className={styles.tagItem}>
         <FaUsers className={styles.icon} />
         {studentCount} estudantes
      </div>

      {/* Duração */}
      <div className={styles.tagItem}>
         <FaClock className={styles.icon} />
         {duration}
      </div>

      {/* Dificuldade */}
      <div className={styles.tagItem}>
         <FaChartBar className={styles.icon} />
         {difficulty}
      </div>
    </div>
  );
}