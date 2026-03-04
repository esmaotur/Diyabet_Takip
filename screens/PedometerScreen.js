import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Footprints, Flame, Map, Timer } from 'lucide-react-native';
import Svg, { Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');
const size = width * 0.6;
const strokeWidth = 12;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const progress = 0.84; // %84

export default function PedometerScreen() {
  const stats = [
    { icon: Flame, val: '342', label: 'kcal', color: '#ef4444' },
    { icon: Map, val: '5.2', label: 'km', color: '#19c3e6' },
    { icon: Timer, val: '64', label: 'dk', color: '#f59e0b' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.chartSection}>
        <View style={styles.chartWrapper}>
          <Svg width={size} height={size} style={styles.svg}>
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#e2e8f0"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#19c3e6"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              strokeLinecap="round"
            />
          </Svg>
          <View style={styles.chartContent}>
            <Footprints size={40} color="#19c3e6" style={styles.chartIcon} />
            <Text style={styles.stepsCount}>8.432</Text>
            <Text style={styles.stepsLabel}>Adım</Text>
          </View>
        </View>
        <Text style={styles.goalText}>
          Günlük Hedef: <Text style={styles.goalValue}>10.000</Text>
        </Text>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((stat, i) => (
          <View key={i} style={styles.statCard}>
            <View style={[styles.statIconContainer, { backgroundColor: `${stat.color}10` }]}>
              <stat.icon size={20} color={stat.color} />
            </View>
            <Text style={styles.statValue}>{stat.val}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <View>
            <Text style={styles.progressTitle}>Hedef İlerlemesi</Text>
            <Text style={styles.progressSubtitle}>Tamamlanan: %84</Text>
          </View>
          <Text style={styles.remainingText}>1.568 adım kaldı</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '84%' }]} />
        </View>
      </View>

      <View style={styles.historyBox}>
        <Text style={styles.historyTitle}>Haftalık Özet</Text>
        <View style={styles.barChart}>
          {[45, 60, 85, 70, 95, 80, 65].map((h, i) => (
            <View key={i} style={styles.barWrapper}>
              <View style={[styles.bar, { height: `${h}%`, backgroundColor: h > 80 ? '#19c3e6' : '#cbd5e1' }]} />
              <Text style={styles.barLabel}>{['P', 'S', 'Ç', 'P', 'C', 'C', 'P'][i]}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8f8',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  chartSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  chartWrapper: {
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  svg: {
    transform: [{ rotate: '-90deg' }],
  },
  chartContent: {
    position: 'absolute',
    alignItems: 'center',
  },
  chartIcon: {
    marginBottom: 4,
  },
  stepsCount: {
    fontSize: 40,
    fontWeight: '900',
    color: '#1e293b',
    letterSpacing: -1,
  },
  stepsLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
  },
  goalText: {
    marginTop: 24,
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  goalValue: {
    color: '#1e293b',
    fontWeight: 'bold',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
  },
  statIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#64748b',
    textTransform: 'uppercase',
  },
  progressCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
    marginBottom: 32,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  progressSubtitle: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 2,
  },
  remainingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#19c3e6',
  },
  progressBar: {
    height: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#19c3e6',
    borderRadius: 6,
  },
  historyBox: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: 'rgba(25, 195, 230, 0.05)',
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 24,
  },
  barChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
  },
  barWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    width: 12,
    borderRadius: 6,
  },
  barLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#94a3b8',
  },
});
