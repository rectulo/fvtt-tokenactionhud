import { RollHandlerBase5e } from "./dnd5e-base.js";

export class RollHandlerObsidian extends RollHandlerBase5e {
  constructor() {
    super();
  }

  /** @override */
  rollAbilityCheckMacro(event, actorId, tokenId, checkId) {
    let actor = super.getActor(actorId, tokenId);
    OBSIDIAN.Items.roll(actor, { roll: "abl", abl: checkId });
  }

  /** @override */
  rollAbilitySaveMacro(event, actorId, tokenId, checkId) {
    let actor = super.getActor(actorId, tokenId);
    OBSIDIAN.Items.roll(actor, { roll: "save", save: checkId });
  }

  /** @override */
  rollSkillMacro(event, actorId, tokenId, checkId) {
    let actor = super.getActor(actorId, tokenId);
    OBSIDIAN.Items.roll(actor, { roll: "skl", skl: checkId });
  }

  /** @override */
  rollItemMacro(event, actorId, tokenId, actionId) {
    let actor = super.getActor(actorId, tokenId);
    OBSIDIAN.Items.roll(actor, { roll: "item", id: actionId });
  }
}
