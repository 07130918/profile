import { useEffect, useState } from 'react';
import type { Mistake } from './types';

type Step = {
    type: 'type' | 'mistake' | 'delete' | 'correct' | 'pause';
    text: string;
    delay?: number;
};

export const useTypingAnimation = (text: string, mistakes: Mistake[]) => {
    const typingSpeed = 80;
    const mistakeDelay = 800;
    const deleteSpeed = 50;

    const [displayText, setDisplayText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);

    // テキストを処理してステップの配列を作成
    const createSteps = () => {
        const steps: Step[] = [];
        // ミスタイプの位置でソート
        const sortedMistakes = [...mistakes].sort(
            (a, b) => a.position - b.position,
        );

        let currentIndex = 0;
        for (const mistake of sortedMistakes) {
            // ミスタイプの位置まで通常にタイプ
            while (currentIndex < mistake.position) {
                steps.push({
                    type: 'type',
                    text: text[currentIndex],
                });
                currentIndex++;
            }

            // ミスタイプを入力
            for (const char of mistake.mistakeText) {
                steps.push({
                    type: 'mistake',
                    text: char,
                });
            }
            // 一時停止
            steps.push({
                type: 'pause',
                text: '',
                delay: mistakeDelay,
            });
            // ミスタイプを削除
            for (let i = 0; i < mistake.mistakeText.length; i++) {
                steps.push({
                    type: 'delete',
                    text: '',
                });
            }

            // 正しいテキストを入力
            for (const char of mistake.correctText) {
                steps.push({
                    type: 'correct',
                    text: char,
                });
            }

            // 元の文字列の該当部分をスキップ
            currentIndex += mistake.correctText.length;
        }

        // 残りの文字を通常にタイプ
        while (currentIndex < text.length) {
            steps.push({
                type: 'type',
                text: text[currentIndex],
            });
            currentIndex++;
        }

        return steps;
    };

    const steps = createSteps();

    useEffect(() => {
        if (currentStep >= steps.length) {
            setIsComplete(true);
            return;
        }

        const step = steps[currentStep];
        const delay =
            step.delay || (step.type === 'delete' ? deleteSpeed : typingSpeed);

        const timer = setTimeout(() => {
            if (
                step.type === 'type' ||
                step.type === 'mistake' ||
                step.type === 'correct'
            ) {
                setDisplayText((prev) => prev + step.text);
            } else if (step.type === 'delete') {
                setDisplayText((prev) => prev.slice(0, -1));
            }
            // pause の場合は何もしない（delayのみ）
            setCurrentStep((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timer);
    }, [currentStep, steps]);

    return { displayText, isComplete };
};
