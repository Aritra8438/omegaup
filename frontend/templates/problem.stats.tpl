{include file='redirect.tpl' inline}
{include file='head.tpl' navbarSection='problems' htmlTitle="{#omegaupTitleProblemStats#}" inline}

<div id="problem-stats"></div>

{if isset($smarty.get.problem)}
<script type="text/javascript" src="{version_hash src="/js/dist/problem_stats.js"}"></script>
{/if}

{include file='footer.tpl' inline}
