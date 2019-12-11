import { getTestingFunctions } from "../testSimplifier";

import { setupWorkspace, cleanUpWorkspace } from "../testUtils";

suite('rot13 operator', () => {
  const { newTest, newTestOnly, newTestSkip } = getTestingFunctions();

  setup(async () => {
    await setupWorkspace();
  });

  teardown(cleanUpWorkspace);

  newTest({
    title: 'the rot13 function is correct',
    start: ['|abcdefghijklmnopqrstuvwxyz',
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      '!@#$%^&*()',
      'âéü'],
    keysPressed: 'g?G',
    end: ['|nopqrstuvwxyzabcdefghijklm',
      'NOPQRSTUVWXYZABCDEFGHIJKLM',
      '!@#$%^&*()',
      'âéü'],
  });

  newTest({
    title: 'g?j works',
    start: ['a|bc', 'def', 'ghi'],
    keysPressed: 'g?j',
    end: ['n|op', 'qrs', 'ghi'],
  });

  newTest({
    title: 'g? in visual mode works',
    start: ['a|bc', 'def', 'ghi'],
    keysPressed: 'vj$g?',
    end: ['a|op', 'qrs', 'ghi'],
  });
});
