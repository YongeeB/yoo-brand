<script>
  import CallUs from "./CallUs.svelte";
  import { phone } from "svelte-awesome/icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
</script>

<CallUs>
  <Icon data={phone} scale={1.35} flip="horizontal" />
</CallUs>
