import{_ as t,c as a,a1 as i,o}from"./chunks/framework.nlCHK0Xf.js";const p=JSON.parse('{"title":"Maps","description":"","frontmatter":{},"headers":[],"relativePath":"systems/maps.md","filePath":"systems/maps.md"}'),r={name:"systems/maps.md"};function s(l,e,n,d,u,c){return o(),a("div",null,e[0]||(e[0]=[i('<h1 id="maps" tabindex="-1">Maps <a class="header-anchor" href="#maps" aria-label="Permalink to &quot;Maps&quot;">​</a></h1><p>Maps and everything surrounding them will be quite different in CS2KZ compared to GOKZ. The most important changes include:</p><ul><li>Instead of the original 7 difficulty tiers we now have 10.</li><li>Instead of a &quot;main&quot; course and 0 or more &quot;bonus&quot; courses we will just have &quot;courses&quot;.</li><li>Each course will have 4 &quot;filters&quot; applied to it. Each filter consists of a <a href="/systems/modes">mode</a>, whether teleports are allowed, a tier, and a &quot;ranked&quot; status.</li><li>Every submitted record will be stored, independent of filters, but only records that correspond to a &quot;ranked&quot; filter will contribute to a player&#39;s overall rank.</li></ul><h2 id="tiers" tabindex="-1">Tiers <a class="header-anchor" href="#tiers" aria-label="Permalink to &quot;Tiers&quot;">​</a></h2><p>The new tiering system consists of 10 different tiers:</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>These are best-effort descriptions, not hard rules. They are meant to illustrate the key ideas, not to be interpreted literally.</p></div><ol><li>Very Easy - for the average player who has never touched KZ before</li><li>Easy - you grasp the basics of CS2 movement, like airstrafing and bhopping</li><li>Medium - you have some KZ experience and are comfortable with the basics</li><li>Advanced - you are comfortable with strafing, bhopping, surfing, and ladder movement</li><li>Hard - you have played quite a bit of KZ now and are comfortable combining the above techniques</li><li>Very Hard - tier 5 but harder</li><li>Extreme - you can KZ in your sleep and are competing for World Records</li><li>Death - you have mastered KZ and can complete the most difficult of maps</li><li>Unfeasible - technically possible, but probably not by humans; reserved for TAS runs</li><li>Impossible - literally and technically impossible, even with perfect inputs</li></ol><p>Unlike in GOKZ, tiers will not be applied to maps anymore, but rather to <a href="#filters">Filters</a>.</p><h2 id="courses" tabindex="-1">Courses <a class="header-anchor" href="#courses" aria-label="Permalink to &quot;Courses&quot;">​</a></h2><p>Each map in CS2KZ consists of one or more &quot;courses.&quot; A course is a segment of gameplay defined by a start and an end zone. Unlike GOKZ, CS2KZ eliminates the distinction between &quot;main&quot; and &quot;bonus&quot; courses—there are simply courses.</p><p>To have a <a href="/mapping/approval">map approved</a>, mappers must meet a minimum quality standard (not yet defined). To balance creativity with fair competition, CS2KZ introduces the concept of &quot;ranked&quot; filters. This allows for diverse course types:</p><ul><li>High-quality, high-effort courses (formerly &quot;main&quot; courses in GOKZ) designed for competitive play.</li><li>Fun or experimental courses (previously &quot;bonus&quot; courses) that offer more creative gameplay.</li></ul><p>For a filter to be ranked, it must:</p><ul><li>Be a tier of 8 or lower.</li><li>Be &quot;reasonable to compete on&quot; (a subjective standard to be further clarified later in development).</li></ul><h2 id="filters" tabindex="-1">Filters <a class="header-anchor" href="#filters" aria-label="Permalink to &quot;Filters&quot;">​</a></h2><p>In CS2KZ, each course has a filter which represents a unique combination of mode, teleport settings, difficulty tier, and &quot;ranked&quot; status. Filters create different variations of a course, providing players with distinct challenges and aligning the course with the appropriate difficulty level.</p><h3 id="key-components-of-a-filter" tabindex="-1">Key Components of a Filter <a class="header-anchor" href="#key-components-of-a-filter" aria-label="Permalink to &quot;Key Components of a Filter&quot;">​</a></h3><ol><li><strong>Mode</strong> - This defines how the course is played (either <a href="/systems/modes#Classic">CKZ</a> or <a href="/systems/modes#Vanilla">VNL</a>)</li><li><strong>Teleport Settings</strong> - Whether or not teleports are allowed in the course</li><li><strong>Tier</strong> - Each Filter will have a <a href="#tiers">tier</a>, which indicates the difficulty level of the filter, determined by the course’s complexity and challenge. Filters can range from Tier 1 (Very East) to Tier 10 (Impossible).</li><li><strong>Ranked Status</strong> - This indicates whether the filter is ranked or unranked.</li></ol><h4 id="example-filter" tabindex="-1">Example Filter <a class="header-anchor" href="#example-filter" aria-label="Permalink to &quot;Example Filter&quot;">​</a></h4><ul><li><strong>Map:</strong> kz_example_map, course 3</li><li><strong>Mode:</strong> CKZ</li><li><strong>Teleport Setting:</strong> No teleports</li><li><strong>Tier:</strong> 4</li><li><strong>Ranked Status:</strong> Ranked</li></ul><p>Filters will evolve over time as the skill ceiling of KZ grows and new boundaries are reached. We aim to create a system that allows the community to have input in making changes when needed, while ensuring <strong>no data is lost.</strong> So go and play what you enjoy!</p><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p>Only records from ranked filters will contribute to a player&#39;s overall rank and award points. This ensures a fair competitive environment while giving mappers the freedom to create diverse courses.</p></div>',22)]))}const m=t(r,[["render",s]]);export{p as __pageData,m as default};
