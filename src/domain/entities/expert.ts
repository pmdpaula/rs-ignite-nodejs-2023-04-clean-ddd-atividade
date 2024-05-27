import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface ExpertProps {
  name: string;
}

export class Expert extends Entity<ExpertProps> {
  static create(props: ExpertProps, id?: UniqueEntityID) {
    const expert = new Expert(props, id);

    return expert;
  }
}
