import { useEffect, useState } from 'react';
import UploadBtn from '../../components/ui/uploadBtn';
import './minhaConta.css';
import { useParams } from 'react-router';

export default function MinhaConta() {

  const [profissionalData, setProfissionalData] = useState(null)

  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      if (params.id) {
        const req = await fetch(`https://67d355c78bca322cc269d90d.mockapi.io/api/v1/users/${params.id}`)
        const res = await req.json()
        setProfissionalData(res)
      }
    }
    onLoad()
  }, [])




  return (
    <div>
      <div className='divH1'>MinhaConta</div>

     
    </div>

  )
}
