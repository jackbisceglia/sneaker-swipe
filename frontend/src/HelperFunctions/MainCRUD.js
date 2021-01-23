import { mockData } from '../Constants';

export const getAllSneakers = async () => {
    return await fetch(mockData).then(res => res.json()).then(data => data)
}