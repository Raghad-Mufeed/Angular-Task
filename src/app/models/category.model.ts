export interface ICategory {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    tags: string[];
}

export class Category implements ICategory {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    tags: string[];
    
    constructor() {}

    fromDTO(categoryReadDTO: CategoryReadDTO): Category {
        this.id = categoryReadDTO.id;
        this.name  = categoryReadDTO.name;
        this.description = categoryReadDTO.description;
        this.imageURL = categoryReadDTO.imageURL;
        this.tags = categoryReadDTO.tags;
        return this;
    }

    toDTO(): CategoryWriteDTO {
        return {id: this.id, name: this.name, description: this.description, 
            imageURL: this.imageURL, tags: this.tags};
    }
}

export interface CategoryReadDTO {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    tags: string[];
}

export interface CategoryWriteDTO {
    id: number;
    name: string;
    description: string;
    imageURL: string;
    tags: string[];
}



