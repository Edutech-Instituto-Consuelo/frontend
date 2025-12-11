import { Button } from "../Button"; // Ajuste o caminho se necessário
import { styles } from "./styles";

interface HeaderPriceProps {
  price: number;
}

export function HeaderPrice({ price }: HeaderPriceProps) {
  // Lógica de formatação isolada aqui
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <div className={styles.priceWrapper}>
      <span className={styles.priceText}>
        {formattedPrice}
      </span>

      <div className={styles.buttonContainer}>
        {/* Reutilizando Button e passando classes extras via className */}
        <Button>
          Começar Agora
        </Button>
      </div>
    </div>
  );
}