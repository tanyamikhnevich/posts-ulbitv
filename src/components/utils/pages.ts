
export const getPagesCount = (totalCount: string | undefined, limit: number | null): number => {
    if (totalCount && limit) {
      return Math.ceil(+totalCount / limit);
    } else return 1
}

export const getPagesArray = (totalPages: number) => {
    let result = []
    for (let i = 0; i< totalPages; i++) {
        result.push(i+1)
    }
    return result
}
