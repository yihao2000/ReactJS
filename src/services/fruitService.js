import { FAVORITE_FRUIT } from '../lib/queries/storage'

export const getFavoriteFruits = () => {
    const favoritesStr = localStorage[FAVORITE_FRUIT] || ''
    if (favoritesStr !== '')
        return favoritesStr.toString().split(',')
    return []
}
export const isFavorite = (id) => {
    const favorite = getFavoriteFruits()
    return favorite.includes(`${id}`)
}
export const changeFavorite = (id) => {
    const favorite = getFavoriteFruits()
    if (!isFavorite(id)) {
        favorite.push(id)
        localStorage.setItem(FAVORITE_FRUIT, favorite.toString());
    }
    else {
        const temp = favorite.filter(c => c !== id)
        localStorage.setItem(FAVORITE_FRUIT, temp.toString());
    }
}


