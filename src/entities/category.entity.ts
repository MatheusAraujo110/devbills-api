type CategoyProps = {
    id?: string
    title: string
    color: string
}

export class Category {
    public id?: string
    public title: string
    public color: string

    constructor({ id, title, color }: CategoyProps) {
        this.id = id
        this.title = title
        this.color = color
    }
}