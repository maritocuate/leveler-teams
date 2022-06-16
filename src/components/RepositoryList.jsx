import { FlatList, View, Text } from 'react-native'

import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

export default function RepositoryList() {
  return (
    <FlatList
        data={repositories}
        renderItem={ ({item, i}) => (
            <RepositoryItem key={i} name={item.name} value={item.value} />
        ) }
    />
  )
}