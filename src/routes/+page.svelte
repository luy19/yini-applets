<script lang="ts">
  export const sections = [
    { slug: 'yanhua', title: '点击夜空欣赏烟花', label: '浪漫烟花' }
    // { slug: 'kissrain', title: '雨中拥抱', label: '雨中拥抱' },
    // { slug: 'summer', title: '夏季小河', label: '夏季小河' },
    // { slug: 'snowy', title: '冬季飘雪', label: '冬季飘雪' },
    // { slug: 'blue', title: '花园女神', label: '花园女神' }
  ];
</script>

<svelte:head>
  <title>java特效演示</title>
</svelte:head>

<h1>秘密花园特效演示</h1>
<ol>
  {#each sections as section (section.slug)}
    <li title={section.title}>
      <a href={section.slug}>{section.label}</a>
    </li>
  {/each}
</ol>
