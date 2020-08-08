import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';
export default {
  // HelloWorld: HelloWorld,
  helloWorld: () => import('@/components/HelloWorld/HelloWorld.vue'),
}