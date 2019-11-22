---
id: reading
title: Read data
sidebar_label: Read data 
---

## Read data

We use pandas to read as datafrane and add it to `anndata.AnnData` object.

| Command | Description |
| ----------- | ----------- |
| `read.tsv` | Read standard TSV file of Spatial Transcriptomics |
| `read.csv` | Read CSV file of Spatial Transcriptomics |
| `read.tm` |  Read transformation matrix and add to data object |
| `read.tissue_image` |  Filter low gene expressed spot based on counts and numbers of genes expressed. |
| `generate.gene_dict` | Generate gene dictionary to convert from Ensembl to gene Symbol|
