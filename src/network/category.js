import {
    Axios
} from './axios'
export function getCategory() {
    return Axios({
        url: "/category"
    })
}
export function getSubcategory(maitKey) {
    return Axios({
        url: "/subcategory",
        params: {
            maitKey,
        }
    })
}

export function subCategoryDetail(miniWallkey, type) {
    return Axios({
        url: "subcategory/detail",
        params: {
            miniWallkey,
            type
        }
    })
}