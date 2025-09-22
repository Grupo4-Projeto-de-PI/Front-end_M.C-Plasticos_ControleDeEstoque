import '../css/listar-informacao-parceiro.css';
import CardParceiro from "../components/cardParceiro/CardParceiro"

export default function ListaParceiros() {
  // const [parceiros, setParceiros] = useState([]);
  // const [parceiroSelecionado, setParceiroSelecionado] = useState(null);

  // useEffect(() => {
  //   async function carregarParceiros() {
  //     try {
  //       const data = await getAllParceiros();
  //       setParceiros(data);
  //     } catch (error) {
  //       console.error("Erro ao carregar lista de parceiros:", error);
  //     }
  //   }
  //   carregarParceiros();
  // }, []);

  // async function abrirDetalhes(id) {
  //   try {
  //     const parceiro = await getParceiroById(id);
  //     setParceiroSelecionado(parceiro);
  //   } catch (error) {
  //     console.error("Erro ao abrir detalhes:", error);
  //   }
  // }

  return (
    <>
      <div className="filtro-preto">
        <CardParceiro />
      </div>
    </>

  );
}