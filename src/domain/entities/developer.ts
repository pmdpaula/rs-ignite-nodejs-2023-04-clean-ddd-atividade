import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface DeveloperProps {
  name: string;
}

export class Developer extends Entity<DeveloperProps> {
  static create(props: DeveloperProps, id?: UniqueEntityID) {
    const developer = new Developer(props, id);

    return developer;
  }
}
