import { NextPage } from 'next'
import { ServicesList } from '../components/ServicesList/ServicesList'

interface Props { }

const Services: NextPage<Props> = ({ }) => {
  return (<div className=''>
    <ServicesList></ServicesList>
  </div>)
}

export default Services