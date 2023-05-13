'use client';
import styles from './page.module.scss';
import { Card } from '@/components/Card';
import React, { use, useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前：
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">確認</button>
    </form>
  );
}
