import { DataDisplayWrapper } from '../../assets/wrappers/DataDisplay.styles'

interface DataDisplayProps{
    title: string
    data: string
}

const DataDisplay: React.FC<DataDisplayProps> = ({title, data}) => {
  return (
    <DataDisplayWrapper>
        <header>
            <p>{title}</p>
        </header>
        <main >
            <div className='row'>
                <span>
                    {data}
                    <p>John.Doe@gmail.com</p>
                </span>
                <div className='test'>
                    <p>0831348839</p>
                    <p>...</p>
                </div>
            </div>
        </main>
    </DataDisplayWrapper>
  )
}

export default DataDisplay