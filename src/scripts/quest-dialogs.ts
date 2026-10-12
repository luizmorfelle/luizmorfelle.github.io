export function initQuestDialogs(root: Document): void {
  root.querySelectorAll<HTMLButtonElement>('[data-open-quest]').forEach((trigger) => {
    const questId = trigger.dataset.openQuest;
    if (!questId) return;
    const dialog = root.getElementById(`quest-dialog-${questId}`);
    if (!(dialog instanceof HTMLDialogElement)) return;
    trigger.addEventListener('click', () => dialog.showModal());
    dialog.querySelector<HTMLButtonElement>('[data-close-quest]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => trigger.focus());
  });
}
