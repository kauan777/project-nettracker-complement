import Image from "next/image";
import Link from "next/link";
import styles from "../styles/styles.module.scss";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

type AdvtageProps = {
  id: number;
  title: string;
  description: string;
};

export default function Home() {
  const advantage: AdvtageProps[] = [
    {
      id: 1,
      title: "Tecnologia 4G",
      description: `Diferentes de outras empresa, a Nettracker utiliza a 
      tecnologia 4G. Além de ser melhor, caso o 3G saia de linha, seu rastreador
      ficará off-line.`,
    },
    {
      id: 1,
      title: "Chip multi-operadoras",
      description: `O nosso chip é multi-operadoras, então quando o seu
      rastreador sair de área por um lugar que tal operadora não alcance, ele
      automaticamente se conectará com outra torre de operadora diferente.`,
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.overlay}>
        <div className={styles.backgroundOverlay}>
          <Image
            className={styles.logo}
            width={309}
            height={46.21}
            src="/nettracker.svg"
            alt="Logo Nettracker"
          />
          <div className={styles.imageContainer}>
            <Image
              className={styles.tracker}
              fill
              objectFit="contain"
              src="/tracker.png"
              alt="Imagem do rastreador"
            />
          </div>
        </div>
      </section>

      <section className={styles.introduction}>
        <h1>Novo rastreador Nettracker</h1>
        <span>
          O novo rastreador da Nettracker vem para mudar de vez o mercado de
          rastreamento veicular. Diferente de tudo já visto, nós trazemos uma
          tecnologia inovadora. Confira já algumas vatagens abaixo:
        </span>
      </section>

      <hr className={styles.division}></hr>

      <section className={styles.containerAdvantage}>
        {advantage.map((item) => (
          <div className={styles.itemAdvantage} key={item.id}>
            <h4>{item.title}</h4>
            <span>{item.description}</span>
          </div>
        ))}
      </section>
      <hr className={styles.division}></hr>

      <section className={styles.containerSocialMedia}>
        <Link
          href="https://api.whatsapp.com/send/?phone=5511979588987"
          target="_blank"
          className={styles.itemSocialMedia}
        >
          <BsWhatsapp size={24} />
          <span>Whatsapp</span>
        </Link>
        <Link
          href="https://www.instagram.com/nettracker/"
          target="_blank"
          className={styles.itemSocialMedia}
        >
          <BsInstagram size={24} />
          <span>Instagram</span>
        </Link>
        <Link
          href="https://nettracker.com.br"
          target="_blank"
          className={styles.itemSocialMedia}
        >
          <AiOutlineGlobal size={24} />
          <span>Website</span>
        </Link>
      </section>
    </div>
  );
}
