function App() {
    const [daftarTodoList, setDaftarTodoList] = useState([]);
    const [tugasBaru, setTugasBaru] = useState("");
    const [isSembunyikanTugasChecked, setIsSembunyikanTugasChecked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = "https://api-latihan.rakryan.id/api/todo-list";
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setDaftarTodoList(result.data);
          setLoading(false);
        })
        .catch((error) => setError(error));
    }, []);
  
    if (error) return <p>Error: {error.message}</p>;
  }