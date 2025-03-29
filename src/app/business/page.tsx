/**
 * Business page component of the enterprise website
 * 企业官网的业务页面组件
 * 
 * This component serves as the entry point for the business section, rendering:
 * 该组件作为业务部分的入口点，渲染：
 * - Business information
 * - 业务信息
 * - Projects information
 * - 项目信息
 * - Products information
 * - 产品信息
 * - Navigation elements
 * - 导航元素
 * 
 * The component uses the BusinessPage component from components/business
 * 该组件使用来自 components/business 的 BusinessPage 组件
 * 
 * @component
 */

import { BusinessPage } from '@/components/business';

export default function Page() {
  return <BusinessPage />;
} 