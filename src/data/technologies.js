import React from 'react';
import { FaJava, FaMobile, FaCloud, FaShoppingCart } from 'react-icons/fa';
import {
  SiJavascript, SiPython, SiCplusplus, SiPhp, SiRuby, SiGo, SiRust, SiSwift, SiKotlin,
  SiReact, SiAngular, SiVuedotjs, SiNodedotjs, SiDjango, SiLaravel, SiSpring, SiDotnet,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiDocker, SiKubernetes, SiGooglecloud,
  SiFirebase, SiFlutter, SiIonic, SiOdoo, SiWordpress, SiShopify, SiMagento, SiPrestashop
} from 'react-icons/si';

export const technologies = {
  programmingLanguages: [
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Python', icon: <SiPython />, color: '#3776AB' },
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'C++', icon: <SiCplusplus />, color: '#00599C' },
    { name: 'C#', icon: <SiDotnet />, color: '#512BD4' },
    { name: 'PHP', icon: <SiPhp />, color: '#777BB4' },
    { name: 'Ruby', icon: <SiRuby />, color: '#CC342D' },
    { name: 'Go', icon: <SiGo />, color: '#00ADD8' },
    { name: 'Rust', icon: <SiRust />, color: '#000000' },
    { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
    { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' }
  ],
  frameworks: [
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'Angular', icon: <SiAngular />, color: '#DD0031' },
    { name: 'Vue.js', icon: <SiVuedotjs />, color: '#4FC08D' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    { name: 'Spring', icon: <SiSpring />, color: '#6DB33F' },
    { name: '.NET', icon: <SiDotnet />, color: '#512BD4' }
  ],
  databases: [
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Redis', icon: <SiRedis />, color: '#DC382D' }
  ],
  mobileDevelopment: [
    { name: 'React Native', icon: <div style={{fontSize: '2.5rem', color: '#61DAFB'}}>📱</div>, color: '#61DAFB' },
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569B' },
    { name: 'Ionic', icon: <SiIonic />, color: '#3880FF' },
    { name: 'Cordova', icon: <FaMobile />, color: '#E8E8E8' },
    { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
    { name: 'Kotlin', icon: <SiKotlin />, color: '#7F52FF' }
  ],
  ecommerce: [
    { name: 'Odoo', icon: <SiOdoo />, color: '#714B67' },
    { name: 'WordPress', icon: <SiWordpress />, color: '#21759B' },
    { name: 'Shopify', icon: <SiShopify />, color: '#7AB55C' },
    { name: 'Magento', icon: <SiMagento />, color: '#EE6723' },
    { name: 'OpenCart', icon: <FaShoppingCart />, color: '#2D5C88' },
    { name: 'PrestaShop', icon: <SiPrestashop />, color: '#DF0067' }
  ],
  cloudDevOps: [
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'AWS', icon: <FaCloud />, color: '#FF9900' },
    { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },
    { name: 'Azure', icon: <FaCloud />, color: '#0078D4' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' }
  ]
};

export const technologyCategoryKeys = [
  'programmingLanguages',
  'frameworks',
  'mobileDevelopment',
  'ecommerce',
  'databases',
  'cloudDevOps'
];

export const allTechnologies = technologyCategoryKeys.flatMap((key) => technologies[key]);
