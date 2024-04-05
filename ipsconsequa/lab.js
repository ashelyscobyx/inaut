const assert = require('assert');

function stripMentionsFromRepoDesc(repoDesc) {
  // This regex will match anything within brackets that does not include the closing bracket
  return repoDesc.replace(/\[[^\]]*\]/g, '');
}

assert.equal(stripMentionsFromRepoDesc('Repo desc [maintainer=@abc]'), 'Repo desc ');
