---
id: preprocessing
title: Preprocessing 
sidebar_label: Preprocessing 
---

## Basic processing

Filtering of highly-variable genes, low expressed spot, per-spot normalization.

| Command | Description |
| ----------- | ----------- |
| `pp.filter_top_genes` | Filter top genes based on counts and numbers of genes expressed. |
| `pp.filter_low_spots` |  Filter low gene expressed spot based on counts and numbers of genes expressed. |
| `pp.remove_noise` |  Filter low gene expressed spot based on counts and numbers of genes expressed. |
| `pp.normalize` | Normalize counts per spots|
| `pp.scale` | Scale counts table data|
| `pp.aggregate_data` | Aggregate data to prepare for differential expression analysis |
