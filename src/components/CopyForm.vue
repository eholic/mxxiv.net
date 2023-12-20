<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label">{{ dict.key.substring(1,dict.key.length) }}</label>
    </div>
    <div class="field-body">
      <div class="field has-addons">
        <p class="control is-expanded">
          <input
            :id="'i'+dict.key"
            class="input"
            type="text"
            :value="dict.value"
          >
        </p>
        <div class="control">
          <a
            class="button is-info tooltip"
            data-tooltip="copied"
            @click="click_copy('i'+dict.key)"
          >
            <span class="icon">
              <font-awesome-icon
                :icon="['fas', 'clipboard']"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'bulma-toast';

export default {
  name: 'CopyForm',
  props: ['dict'],
  methods: {
    click_copy(id) {
      const input = document.getElementById(id);
      const isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);

      if (isiOSDevice) {
        const editable = input.contentEditable;
        const { readOnly } = input;

        input.contentEditable = true;
        input.readOnly = true;

        const range = document.createRange();
        range.selectNodeContents(input);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        input.setSelectionRange(0, 999999);
        input.contentEditable = editable;
        input.readOnly = readOnly;
      } else {
        input.select();
      }

      document.execCommand('copy');
      input.blur();

      toast({
        message: 'copied',
        type: 'is-info',
        duration: 1000,
        position: 'bottom-center',
      });
    },
  },
};
</script>

<style scoped>
</style>
